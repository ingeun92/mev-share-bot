import prisma from "../../configs/prisma.js";

/**** GET *****/

export const getExampleIds = async (exampleId: number): Promise<object> => {
  const exampleIds = await prisma.tb_test.findFirst({
    where: {
      example_id: exampleId,
    },
    select: {
      example_id: true,
      example_name: true,
    },
  });

  return exampleIds;
};

/***** POST  *****/

export const addExampleData = async (exampleName: string): Promise<void> => {
  await prisma.tb_test.create({
    data: {
      example_id: 1,
      example_name: exampleName,
      create_at: new Date(),
      update_at: new Date(),
    },
  });
};
