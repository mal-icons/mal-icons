import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-open-with",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrOpenWith {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M450-198v-159q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T510-357v159l67-67q9.13-9 22.07-9T621-264.9q9 9.1 9 22Q630-230 621-221L501-101q-9 9-21 9t-21-9L339-221q-9-9-9-22t9-22q9-9 21.83-9 12.83 0 22.17 9l67 67ZM198-450l62 62q9 9.13 9 22.07T259.9-344q-9.1 9-22 9Q225-335 216-344L101-459q-9-9-9-21t9-21l116-116q9.33-9 22.17-9Q252-626 261-617q9 9 9 21.83 0 12.83-9 22.17l-63 63h159q13.08 0 21.54 8.45 8.46 8.45 8.46 21.5 0 13.05-8.46 21.55Q370.08-450 357-450H198Zm564 0H604q-13.08 0-21.54-8.45-8.46-8.45-8.46-21.5 0-13.05 8.63-21.55Q591.25-510 604-510h158l-62-62q-9-9.13-9-22.06T700.1-616q9.1-9 22-9Q735-625 744-616l115 115q9 9 9 21t-9 21L744-344q-9 9-22 9t-22-9q-9-9-9-22t9-22l62-62ZM450-762l-62 62q-9 9-22 9t-22-9q-9-9-9-21.83 0-12.83 9-22.17l115-115q9-9 21-9t21 9l115 115q9 9 9 22t-9 22q-9 9-21.83 9-12.83 0-22.17-9l-62-62v158q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63-12.82 0-21.32-8.62T450-604v-158Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrOpenWith;
