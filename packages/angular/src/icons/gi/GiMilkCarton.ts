import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-milk-carton",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiMilkCarton {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M302.96 20.02l-93.92 46.56v35.4c31.31-15.52 62.61-31.05 93.92-46.57zm6.53 52.25l-95.4 47.3 63.04 78.14 95.4-47.3zm-111.91 55.49l-33.73 16.72h47.22zm-22.12 34.72l71.61 26.63-21.48-26.63zm-41.02 3.95v276.75l131.22 48.8v-276.75zm243.13 1.56c-31.31 15.52-62.61 31.04-93.92 46.57v275.86l93.92-46.57zM176.5 272.47s-15.3 15.09-9.89 24.2c4.17 7.02 21.89 5.42 21.89 5.42l15.55 3.85s17.72 10.37 21.89 5.42c5.41-6.44-9.89-29.1-9.89-29.1s35.91 33.49 29.66 47.32c-3.14 6.96-24.72-2.12-24.72-2.12s5.5 7.21 4.94 10.55c-1 6.06-13.77 9.92-13.77 9.92s1.11 21.24-6 25.17c-5.15 2.84-14.630.5-19.77-4.89-7.11-7.45-6-28.14-6-28.14s-12.77-10.18-13.78-16.73c-0.55-3.61 4.94-8.1 4.94-8.1s-21.57-1.61-24.72-10.12c-6.25-16.92 29.66-32.63 29.66-32.63z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiMilkCarton;
