import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-rtt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrRtt {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M422-120q-17 0-28.5-12.08-11.5-12.08-11.5-29Q382-178 394.06-190T423-202h58l89-556H439l-27 165q-2.45 15.11-14.28 25.06Q385.9-558 369.58-558 350-558 338-572.5t-9-34.5l30-183q3.73-21.64 20.54-35.82Q396.34-840 418-840h396q28.29 0 46.65 21Q879-798 874-770l-29 177q-2.45 15.11-14.28 25.06Q818.9-558 802.58-558 783-558 771-573t-9-34l24-151H655l-89 556h46q16.88 0 28.94 12.08 12.06 12.08 12.06 29Q653-144 640.94-132T612-120H422ZM189-700q-13.08 0-21.54-8.68-8.46-8.68-8.46-21.5 0-12.82 8.63-21.32T189-760h104l-10 60h-94Zm-26 165q-13.08 0-21.54-8.68-8.46-8.68-8.46-21.5 0-12.82 8.63-21.32T163-595h104l-10 60h-94Zm-53 330q-12.75 0-21.37-8.68Q80-222.35 80-235.17 80-248 88.63-256.5T110-265h204l-9 60H110Zm27-165q-13.08 0-21.54-8.68-8.46-8.68-8.46-21.5 0-12.82 8.63-21.32T137-430h204l-10 60H137Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrRtt;
