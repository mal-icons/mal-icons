import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-pest-control",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtPestControl {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 9c-2.21 0-4 2.24-4 5s1.79 5 4 5 4-2.24 4-5-1.79-5-4-5zm1 8h-2v-6h2v6zm0.88-9.64C13.62 6.57 12.88 6 12 6s-1.620.57-1.88 1.36C10.71 7.13 11.34 7 12 7s1.290.13 1.880.36z","opacity":".3"}],["path",{"d":"M21 15v-2h-3.07c-0.05-0.39-0.12-0.77-0.22-1.14l2.58-1.49-1-1.73L16.92 10c-0.28-0.48-0.62-0.91-0.99-1.290.1-0.560.2-1.69-0.58-2.89L17 4.17l-1.41-1.41-1.72 1.72c-1.68-0.89-3.1-0.33-3.73 0L8.41 2.76 7 4.17l1.65 1.65c-0.78 1.2-0.68 2.34-0.58 2.89-0.370.39-0.710.82-0.99 1.29L4.71 8.63l-1 1.73 2.58 1.49c-0.10.37-0.170.75-0.22 1.14H3v2h3.07c0.050.390.120.770.22 1.14l-2.58 1.49 1 1.73L7.08 18c1.08 1.81 2.88 3 4.92 3s3.84-1.19 4.92-3l2.37 1.37 1-1.73-2.58-1.49c0.1-0.370.17-0.750.22-1.14H21zm-9-9c0.88 0 1.620.57 1.88 1.36C13.29 7.13 12.66 7 12 7s-1.290.13-1.880.36C10.38 6.57 11.12 6 12 6zm0 13c-2.21 0-4-2.24-4-5s1.79-5 4-5 4 2.24 4 5-1.79 5-4 5z"}],["path",{"d":"M11 11h2v6h-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtPestControl;
