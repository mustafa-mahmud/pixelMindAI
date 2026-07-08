import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { plans } from './data';

type PlanId = (typeof plans)[number]['id'];

type PremiumPlanCardProps = {
  plan: (typeof plans)[number];
  selected: boolean;
  onSelect: (planId: PlanId) => void;
};

function PremiumPlanCard({ plan, selected, onSelect }: PremiumPlanCardProps) {
  return (
    <Pressable
      onPress={() => onSelect(plan.id)}
      className={`relative rounded-[32px] bg-[#141414]/70 p-8 active:scale-95 ${
        selected
          ? 'border-2 border-[#ddb7ff] shadow-[0_0_25px_rgba(221,183,255,0.2)]'
          : 'border border-white/10'
      }`}
    >
      {plan.badge ? (
        <View className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#ddb7ff] px-4 py-1 shadow-lg">
          <Text className="text-[12px] font-semibold leading-4 text-[#490080]">
            {plan.badge}
          </Text>
        </View>
      ) : null}

      <View className="mb-6">
        <Text className="text-[14px] font-medium uppercase leading-5 tracking-[2px] text-[#cfc2d6]">
          {plan.name}
        </Text>
        <View className="mt-2 flex-row items-baseline">
          <Text className="text-4xl font-bold text-white">{plan.price}</Text>
          <Text className="ml-2 text-[#cfc2d6]">{plan.interval}</Text>
        </View>
        {plan.savings ? (
          <Text className="mt-1 text-[12px] font-semibold leading-4 text-[#ddb7ff]">
            {plan.savings}
          </Text>
        ) : null}
      </View>

      <View className="mb-8 gap-4">
        {plan.benefits.map((benefit) => (
          <View key={benefit} className="flex-row items-center gap-3">
            <MaterialIcons name="check-circle" size={18} color="#FFD700" />
            <Text className="text-[16px] font-normal leading-6 text-[#cfc2d6]">
              {benefit}
            </Text>
          </View>
        ))}
      </View>

      <View
        className={`absolute right-6 top-6 h-6 w-6 items-center justify-center rounded-full border-2 ${
          selected ? 'border-[#ddb7ff]' : 'border-[#4d4354]'
        }`}
      >
        <View
          className={`h-3 w-3 rounded-full bg-[#ddb7ff] ${
            selected ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </View>
    </Pressable>
  );
}

export function PremiumPlans() {
  const [selectedPlan, setSelectedPlan] = useState<PlanId>('yearly');

  return (
    <View className="mb-12 gap-6">
      {plans.map((plan) => (
        <PremiumPlanCard
          key={plan.id}
          plan={plan}
          selected={plan.id === selectedPlan}
          onSelect={setSelectedPlan}
        />
      ))}
    </View>
  );
}
