import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-radio",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrRadio {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M140-80q-24 0-42-18t-18-42v-511q0-22 15-38.5t35-24.5l471-190q10.59-5 20.79-0.5Q632-900 636-889t-0.18 21.13Q631.64-857.75 621-854L286-720h534q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm0-60h680v-310H140v310Zm179.18-63Q360-203 388-231.18q28-28.18 28-69T387.82-369q-28.18-28-69-28T250-368.82q-28 28.18-28 69T250.18-231q28.18 28 69 28ZM140-510h520v-30.17q0-12.82 8.68-21.32 8.68-8.5 21.5-8.5 12.83 0 21.33 8.63T720-540v30h100v-150H140v150Zm0 370v-310 310Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrRadio;
