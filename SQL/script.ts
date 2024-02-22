import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function createUser() {
  const users = await prisma.user.create({
    data: {
      name: "Vinayak Vishwanath",
      email: "Vinayak@gmasil.com",
      Sport: {
        create: {
          Sportname: "Football",
          description:
            "Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard (20-metre) pitch with a wicket at each end, each comprising two bails balanced on three stumps.",
        },
      },
      role: "Sportman",
    },
  });
  console.log("User created", users);
}
async function findAllUsers() {
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
}

async function findUserbyname(searchname: string) {
  const allUsers = await prisma.user.findMany({
    select: {
      name: true,
      email: true,
      role: true,
    },
    where: {
      name: {
        contains: searchname,
        mode: "insensitive", // This makes the search case-insensitive
      },
    },
  });
  console.log("User Fetch successfully", allUsers);
}

// createUser();
// findAllUsers();
findUserbyname("Nishit");
