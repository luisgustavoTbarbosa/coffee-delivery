import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { TopicBox, TopicInfo } from "./styles";

export function Topics() {
  return (
    <TopicBox>
      <TopicInfo variant="yellow-dark">
        <span>
          <ShoppingCart size={20} color="#ffffff" weight="fill" />
        </span>
        Compra simples e segura
      </TopicInfo>
      <TopicInfo variant="base-text">
        <span>
          <Package size={20} color="#ffffff" weight="fill" />
        </span>
        Embalagem mantém o café intacto
      </TopicInfo>
      <TopicInfo variant="yellow">
        <span>
          <Timer size={20} color="#ffffff" weight="fill" />
        </span>
        Entrega rápida e rastreada
      </TopicInfo>
      <TopicInfo variant="purple">
        <span>
          <Coffee size={20} color="#ffffff" weight="fill" />
        </span>
        O café chega fresquinho até você
      </TopicInfo>
    </TopicBox>
  )
}