import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-wrist",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrWrist {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M248-280H70q-12.75 0-21.37-8.68Q40-297.35 40-310.17 40-323 48.63-331.5T70-340h177q12.29 0 23.42 4.43Q281.55-331.13 290-323l150 150-50-104q-8-15 0.75-29T417-320h393q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T810-260H465l19 39q13 26 9.5 54.5T470-118l-9 9q-9 9-21 9t-21-9L248-280ZM40-650.17Q40-663 48.63-671.5T70-680h158l53-54q12.8-12.63 29.37-19.31Q326.93-760 345-760h425q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T770-700H353q-9.82 0-18.41 4T318-685l-48 48q-8.45 8.13-19.58 12.57Q239.29-620 227-620H70q-12.75 0-21.37-8.68Q40-637.35 40-650.17ZM40-431Zm850 26H600q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T600-465h290q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T890-405Zm-40-150H600q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T600-615h250q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T850-555Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrWrist;
