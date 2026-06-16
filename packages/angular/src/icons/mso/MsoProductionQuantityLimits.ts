import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-production-quantity-limits",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoProductionQuantityLimits {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M289.79-80Q260-80 239-101.21q-21-21.21-21-51Q218-182 239.21-203q21.21-21 51-21Q320-224 341-202.79q21 21.21 21 51Q362-122 340.79-101q-21.21 21-51 21Zm404 0Q664-80 643-101.21q-21-21.21-21-51Q622-182 643.21-203q21.21-21 51-21Q724-224 745-202.79q21 21.21 21 51Q766-122 744.79-101q-21.21 21-51 21ZM480-584q-14.45 0-24.22-9.77Q446-603.55 446-618q0-14.45 9.78-24.22Q465.55-652 480-652q14.45 0 24.23 9.78Q514-632.45 514-618q0 14.45-9.77 24.23Q494.45-584 480-584Zm-30-136v-200h60v200h-60ZM290-287q-42 0-61.5-34t0.5-69l61-111-150-319H62v-60h116l170 364h292l156-280 52 28-153 277q-9.36 16.67-24.68 25.83Q655-456 634-456H334l-62 109h494v60H290Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoProductionQuantityLimits;
