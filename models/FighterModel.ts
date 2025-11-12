type ActionType = "attack" | "heal";

interface ActionResult {
  action: ActionType;
  amount: number;
}

abstract class Fighter {
  id: string;
  name: string;
  hp: number;
  maxHp: number = 100;

  constructor(id: string, name: string, hp: number = 100) {
    this.id = id;
    this.name = name;
    this.hp = hp;
  }

  abstract act(): Promise<ActionResult>;

  protected delay(ms: number) {
    return new Promise(res => setTimeout(res, ms));
  }
}

class Wizard extends Fighter {
  async act(): Promise<ActionResult> {
    await this.delay(400);
    const roll = Math.random();
    if (roll < 0.6) {
      // 60% heal
      return { action: "heal", amount: Math.floor(Math.random() * 12) + 8 };
    } else {
      // 40% attack
      return { action: "attack", amount: Math.floor(Math.random() * 10) + 5 };
    }
  }
}

class Knight extends Fighter {
  async act(): Promise<ActionResult> {
    await this.delay(500);
    const roll = Math.random();
    if (roll < 0.5) {
      return { action: "attack", amount: Math.floor(Math.random() * 15) + 10 };
    } else {
      return { action: "heal", amount: Math.floor(Math.random() * 10) + 6 };
    }
  }
}

class Warrior extends Fighter {
  async act(): Promise<ActionResult> {
    await this.delay(400);
    const roll = Math.random();
    if (roll < 0.8) {
      // 80% attack
      return { action: "attack", amount: Math.floor(Math.random() * 20) + 10 };
    } else {
      // 20% heal
      return { action: "heal", amount: Math.floor(Math.random() * 8) + 4 };
    }
  }
}
