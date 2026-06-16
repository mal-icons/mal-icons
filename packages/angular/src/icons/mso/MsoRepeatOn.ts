import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-repeat-on",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoRepeatOn {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M100-40q-24 0-42-18t-18-42v-760q0-24 18-42t42-18h760q24 0 42 18t18 42v760q0 24-18 42t-42 18H100Zm180-40 42-44-86-86h524v-220h-60v160H236l86-86-42-44-160 160L280-80Zm-80-450h60v-160h464l-86 86 42 44 160-160-160-160-42 44 86 86H200v220Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoRepeatOn;
