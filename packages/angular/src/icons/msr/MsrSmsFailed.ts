import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-sms-failed",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrSmsFailed {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M479.98-367q14.02 0 23.52-9.48 9.5-9.48 9.5-23.5 0-14.02-9.48-23.52-9.48-9.5-23.5-9.5-14.02 0-23.52 9.48-9.5 9.48-9.5 23.5 0 14.02 9.48 23.52 9.48 9.5 23.5 9.5Zm0.27-142q12.75 0 21.25-8.62T510-539v-191q0-12.75-8.68-21.37-8.68-8.62-21.5-8.62-12.82 0-21.32 8.63T450-730v191q0 5.88 2.29 11.4 2.29 5.52 6.5 9.56Q463-514 468.63-511.5q5.63 2.5 11.63 2.5ZM240-240 131-131q-14 14-32.5 6.34T80-152v-668q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H240Zm-100-60h680v-520H140v520Zm0 0v-520 520Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrSmsFailed;
