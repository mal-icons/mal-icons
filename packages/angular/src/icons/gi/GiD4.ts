import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-d4",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiD4 {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M235.11 196.24l17.07-29.46v29.46H235.11zM486.95 456H25.05L256 56zm-358.63-54.83l41.21-22.94-6.7-12.07-59.7 33.3 5.46 9.81a11.28 11.28 0 0 1 2.65-0.88 11.82 11.82 0 0 1 5.57-0.08 12.53 12.53 0 0 1 6.34 4.01 59.3 59.3 0 0 1 5.07 7.35l7.99-4.46zM273.07 196.24h-7.74v-42.73H250.24l-25.14 41.52v11.75h27.07v14.72h13.16v-14.72h7.74v-10.52zm131.62 212.45q6.82-11.930.62-21.73-3.26-5.13-10.67-9.74l-6.48 11.34a22.68 22.68 0 0 1 6.53 5.48q2.87 4.19-0.17 9.52a8.45 8.45 0 0 1-5.92 4.55 10.87 10.87 0 0 1-7.46-1.5 14.08 14.08 0 0 1-6.44-8.51 99.73 99.73 0 0 1-2.29-15.17q-1.32-13.09-5.82-18.98a32.14 32.14 0 0 0-10.1-9.42l-23.28 40.71 10.28 5.88 14.83-25.91a15.2 15.2 0 0 1 1.68 4.58q0.47 2.42 1.06 8.59l0.64 6.57a45.15 45.15 0 0 0 2.72 12.82 21.52 21.52 0 0 0 9.46 10.64q8.6 4.92 17 2.33 8.4-2.58 13.81-12.01z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiD4;
