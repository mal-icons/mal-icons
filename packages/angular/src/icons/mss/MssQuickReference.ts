import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-quick-reference",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssQuickReference {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M635-150h40v-150h-40v150Zm20-189q8 0 14-6.15t6-14.35q0-8.2-6-14.35T655-380q-9 0-14.5 6t-5.5 14.29q0 8.29 5.5 14.5Q646-339 655-339ZM180-820v295-4 389-680 186-186Zm99 400h168q12-17 26.5-32t31.5-28H279v60Zm0 170h123q-2-15-1.5-30t2.5-30H279v60ZM120-80v-800h421l219 219v155q-14-7-29-11.5t-31-7.5v-109H511v-186H180v680h260q11 17 24 32t28 28H120Zm535-389q80.51 0 137.26 56.75Q849-355.51 849-275q0 80.51-56.74 137.26Q735.51-81 655-81q-80.51 0-137.25-56.74Q461-194.49 461-275q0-80.51 56.75-137.25Q574.49-469 655-469Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssQuickReference;
