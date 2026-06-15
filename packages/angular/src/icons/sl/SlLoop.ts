import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-loop",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlLoop {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M960 101.84l-8960c-35.34 0-64 28.66-64 64v576c0 35.36 28.66 64 64 64h160c20.5 0 32-26.32 32-31.98v-0.02c0-5.82-10.88-32.42-32-32.42h-120.96c-21.38 0-38.72-17.34-38.72-38.72V206c0-21.39 17.33-38.72 38.72-38.72l818.27-1.01c21.38 0 38.72 17.33 38.72 38.72V702.69c0 21.38-17.34 38.72-38.72 38.72H518.14l75.98-68.91c9.34-8.94 12.37-23.41 3.03-32.34l-5.47-8.06c-9.38-8.94-24.5-8.94-33.84 0L428.11 750.53c-0.190.16-0.370.22-0.530.37l-8.48 8.1c-4.67 4.43-7.01 10.34-6.98 16.22-0.03 5.9 2.29 11.78 6.98 16.29l8.48 8.1c0.160.160.370.190.530.34L555.84 915.44c9.34 8.94 24.46 8.94 33.84 0l5.47-8.06c9.34-8.94 6.32-23.44-3.02-32.37l-77.14-69.17H960c35.34 0 64-28.64 64-64v-576c0-35.34-28.66-64-64-64z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlLoop;
