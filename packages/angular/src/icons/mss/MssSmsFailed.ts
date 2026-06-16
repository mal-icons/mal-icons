import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-sms-failed",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssSmsFailed {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M479.98-367q14.02 0 23.52-9.48 9.5-9.48 9.5-23.5 0-14.02-9.48-23.52-9.48-9.5-23.5-9.5-14.02 0-23.52 9.48-9.5 9.48-9.5 23.5 0 14.02 9.48 23.52 9.48 9.5 23.5 9.5ZM450-509h60v-251h-60v251ZM80-80v-800h800v640H240L80-80Zm60-220h680v-520H140v520Zm0 0v-520 520Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssSmsFailed;
