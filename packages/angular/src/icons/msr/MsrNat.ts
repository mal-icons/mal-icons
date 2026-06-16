import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-nat",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrNat {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M156-360q-48 0-82-34t-34-82q0-48 34-82t82-34q40 0 72 20t43 62h207v60H271q-11 42-43 66t-72 24Zm0-60q24 0 40-16t16-40q0-24-16-40t-40-16q-24 0-40 16t-16 40q0 24 16 40t40 16Zm74 339q-12 1-21-7.5t-9-21.5q0-12 8.5-21t21.5-10q133-11 221.5-107T540-480q0-136-88.5-232T230-819q-13-1-21.5-9.5T200-850q0-13 9-21.5t21-7.5q144 11 251.5 113.5T600-510h206l-57-57q-8-8-8-21t9-22q8-8 21.5-8.5T793-610l108 109q5 5 7 10t2 11q0 6-2 11t-7 10L792-350q-8 8-21 8t-21-9q-9-8-9-21t9-22l56-56H600q-11 153-118.5 255.5T230-81Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrNat;
