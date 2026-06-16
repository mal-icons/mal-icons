import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-fiber-smart-record",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrFiberSmartRecord {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M360-200q-117 0-198.5-81.5T80-480q0-117 81.5-198.5T360-760q117 0 198.5 81.5T640-480q0 117-81.5 198.5T360-200Zm0-280Zm323 264q-15 5-26.5-4.5T645-247q0-8 6-15.5t14-9.5q69-20 112-78.5T820-483q0-74-43-132t-112-78q-8-2-14-9.5t-6-16.5q0-17 11.5-26t26.5-4q87 26 142 99t55 167q0 94-55 167T683-216Zm-323-44q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrFiberSmartRecord;
