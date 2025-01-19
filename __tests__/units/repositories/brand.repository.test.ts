import { prisma } from '../../../prisma';
import {prisma as prismaMock} from "../../../__mock__/prisma";
import {
  createBrand,
  getBrands,
  getBrandById,
  getBrandByName,
  updateBrand,
  deleteBrand,
  deleteAllBrands,
} from '../../../repositories/brand.repository';
import { Brand, Prisma } from '@prisma/client';

jest.mock('../../../prisma', () => {prisma:prismaMock});

describe('Brand Repository', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('createBrand', () => {
    it('should create a new brand', async () => {
      const mockBrand: Brand = { id: '1', name: 'Test Brand', logo: null, createdAt: new Date(), updatedAt: new Date() };
      (prisma.brand.create as jest.Mock).mockResolvedValue(mockBrand);

      const result = await createBrand({ name: 'Test Brand' });
      expect(prisma.brand.create).toHaveBeenCalledWith({
        data: { name: 'Test Brand' },
      });
      expect(result).toEqual(mockBrand);
    });
  });

  describe('getBrands', () => {
    it('should return all brands', async () => {
      const mockBrands: Brand[] = [
        { id: '1', name: 'Brand 1', logo: null, createdAt: new Date(), updatedAt: new Date() },
        { id: '2', name: 'Brand 2', logo: null, createdAt: new Date(), updatedAt: new Date() },
      ];
      (prisma.brand.findMany as jest.Mock).mockResolvedValue(mockBrands);

      const result = await getBrands();
      expect(prisma.brand.findMany).toHaveBeenCalled();
      expect(result).toEqual(mockBrands);
    });
  });

  describe('getBrandById', () => {
    it('should return a brand by ID', async () => {
      const mockBrand: Brand = { id: '1', name: 'Test Brand', logo: null, createdAt: new Date(), updatedAt: new Date() };
      (prisma.brand.findUnique as jest.Mock).mockResolvedValue(mockBrand);

      const result = await getBrandById('1');
      expect(prisma.brand.findUnique).toHaveBeenCalledWith({
        where: { id: '1' },
        include: {
          products: {
            include: {
              variants: {
                include: {
                  sizes: true,
                },
              },
            },
          },
        },
      });
      expect(result).toEqual(mockBrand);
    });
  });

  describe('getBrandByName', () => {
    it('should return brands by name', async () => {
      const mockBrands: Brand[] = [
        { id: '1', name: 'Test Brand', logo: null, createdAt: new Date(), updatedAt: new Date() },
      ];
      (prisma.brand.findMany as jest.Mock).mockResolvedValue(mockBrands);

      const result = await getBrandByName('Test');
      expect(prisma.brand.findMany).toHaveBeenCalledWith({
        where: { name: { contains: 'Test' } },
      });
      expect(result).toEqual(mockBrands);
    });
  });

  describe('updateBrand', () => {
    it('should update a brand', async () => {
      const mockBrand: Brand = { id: '1', name: 'Updated Brand', logo: null, createdAt: new Date(), updatedAt: new Date() };
      (prisma.brand.update as jest.Mock).mockResolvedValue(mockBrand);

      const result = await updateBrand(mockBrand);
      expect(prisma.brand.update).toHaveBeenCalledWith({
        where: { id: mockBrand.id },
        data: mockBrand,
      });
      expect(result).toEqual(mockBrand);
    });
  });

  describe('deleteBrand', () => {
    it('should delete a brand by ID', async () => {
      const mockBrand: Brand = { id: '1', name: 'Deleted Brand', logo: null, createdAt: new Date(), updatedAt: new Date() };
      (prisma.brand.delete as jest.Mock).mockResolvedValue(mockBrand);

      const result = await deleteBrand('1');
      expect(prisma.brand.delete).toHaveBeenCalledWith({
        where: { id: '1' },
      });
      expect(result).toEqual(mockBrand);
    });
  });

  describe('deleteAllBrands', () => {
    it('should delete all brands', async () => {
      const mockPayload: Prisma.BatchPayload = { count: 10 };
      (prisma.brand.deleteMany as jest.Mock).mockResolvedValue(mockPayload);

      const result = await deleteAllBrands();
      expect(prisma.brand.deleteMany).toHaveBeenCalled();
      expect(result).toEqual(mockPayload);
    });
  });
});
