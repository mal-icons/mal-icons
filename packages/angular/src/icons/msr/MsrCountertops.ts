import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-countertops",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrCountertops {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M190-160q-12.75 0-21.37-8.62T160-190v-320h-50q-12.75 0-21.37-8.68Q80-527.35 80-540.17 80-553 88.63-561.5T110-570h125q-28.87 0-49.44-20.56Q165-611.12 165-640v-130q0-12.75 8.63-21.37T195-800h170q12.75 0 21.38 8.63T395-770v130q0 28.88-20.56 49.44Q353.88-570 325-570h325v-120q0-21.25-14.43-35.62Q621.14-740 599.8-740 586-740 575.5-735q-10.5 5-16.9 16-5.6 10-13.6 14.5t-17 4.5q-18.25 0-25.63-15Q495-730 506-747q15-25 39-39t54.61-14Q646-800 678-767.92q32 32.08 32 77.92v120h140q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T850-510h-50v320q0 12.75-8.62 21.38T770-160H190Zm35-470h110v-110H225v110Zm-5 410h230v-290H220v290Zm290 0h230v-290H510v290ZM225-630h110-110Zm255 265Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrCountertops;
