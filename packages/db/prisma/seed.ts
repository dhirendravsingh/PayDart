import { PrismaClient } from '@prisma/client'
import bcrypt from "bcrypt";
const prisma = new PrismaClient()

async function main() {
  const dhiru = await prisma.user.upsert({
    where: { number: '7895803806' },
    update: {},
    create: {
      number: '7895803806',
      password: await bcrypt.hash('dhiru', 10),
      name: 'dhiru',
      Balance: {
        create: {
            amount: 75395734,
            locked: 0
        }
      },
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Success",
          amount: 75395734,
          token: "token__1",
          provider: "HDFC Bank",
        },
      },
    },
  })
  const prakhar = await prisma.user.upsert({
    where: { number: '9520121310' },
    update: {},
    create: {
      number: '9520121310',
      password: await bcrypt.hash('prakhar', 10),
      name: 'prakhar',
      Balance: {
        create: {
            amount: 58305909,
            locked: 0
        }
      },
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Success",
          amount: 2000,
          token: "token__2",
          provider: "HDFC Bank",
        },
      },
    },
  })
  const aryan = await prisma.user.upsert({
    where: { number: '9389705985' },
    update: {},
    create: {
      number: '9389705985',
      password: await bcrypt.hash('aryan', 10),
      name: 'aryan',
      Balance: {
        create: {
            amount: 65305730,
            locked: 0
        }
      },
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Success",
          amount: 65305730,
          token: "token__3",
          provider: "HDFC Bank",
        },
      },
    },
  })
  const rahul = await prisma.user.upsert({
    where: { number: '9984435405' },
    update: {},
    create: {
      number: '9984435405',
      password: await bcrypt.hash('rahul', 10),
      name: 'rahul',
      Balance: {
        create: {
            amount: 85357300,
            locked: 0
        }
      },
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Success",
          amount: 85357300,
          token: "token__4",
          provider: "HDFC Bank",
        },
      },
    },
  })
  const satyam = await prisma.user.upsert({
    where: { number: '9682930859' },
    update: {},
    create: {
      number: '9682930859',
      password: await bcrypt.hash('satyam', 10),
      name: 'satyam',
      Balance: {
        create: {
            amount: 57395220,
            locked: 0
        }
      },
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Success",
          amount: 57395220,
          token: "token__5",
          provider: "HDFC Bank",
        },
      },
    },
  })
  const kushagra = await prisma.user.upsert({
    where: { number: '6386597059' },
    update: {},
    create: {
      number: '6386597059',
      password: await bcrypt.hash('kushagra', 10),
      name: 'kushagra',
      Balance: {
        create: {
            amount: 57034674,
            locked: 0
        }
      },
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Success",
          amount: 57034674,
          token: "token__6",
          provider: "HDFC Bank",
        },
      },
    },
  })
  console.log({ aryan, dhiru, prakhar, rahul, kushagra, satyam })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })