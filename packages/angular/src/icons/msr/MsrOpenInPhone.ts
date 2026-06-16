import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-open-in-phone",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrOpenInPhone {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M260-40q-24 0-42-18t-18-42v-260h60v170h440v-580H260v170h-60v-260q0-24 18-42t42-18h440q24 0 42 18t18 42v760q0 24-18 42t-42 18H260Zm0-90v30h440v-30H260Zm179-320H110q-12.75 0-21.37-8.68Q80-467.35 80-480.17 80-493 88.63-501.5T110-510h329l-58-58q-9-9-9-21.1 0-12.1 9-20.9 9-9 21.5-9t21.5 9l110 109q9 9 9 21t-9 21L424-349q-9 9-21 8.5t-21-9.5q-9-9-9-21.5t9-21.5l57-57ZM260-830h440v-30H260v30Zm0 0v-30 30Zm0 700v30-30Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrOpenInPhone;
