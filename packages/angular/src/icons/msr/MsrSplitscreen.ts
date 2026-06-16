import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-splitscreen",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrSplitscreen {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M220-570h520v-250H220v250Zm0 60q-24 0-42-18t-18-42v-250q0-24 18-42t42-18h520q24 0 42 18t18 42v250q0 24-18 42t-42 18H220Zm0 370h520v-250H220v250Zm0 60q-24 0-42-18t-18-42v-250q0-24 18-42t42-18h520q24 0 42 18t18 42v250q0 24-18 42t-42 18H220Zm0-490v-250 250Zm0 430v-250 250Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrSplitscreen;
