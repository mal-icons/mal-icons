import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-jigsaw-piece",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiJigsawPiece {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M234.72 26.59c-0.75-0.01-1.510.01-2.280.03-5.090.15-10.550.97-16.37 2.53-62.16 16.66-38.92 89.86-13.97 94.72 4.960.96 15.1 29.77 5.41 47.97L102.25 200.03l28.06 104.75c-4.66 18.96-34.61 21.79-51.44 8-13.04-10.69-68.98 9.4-54.78 62.41 14.2 53 76.61 33.18 80.75 11.91 1.02-5.24 28.51-24.73 45.41-7.84l28.13 104.94 114.59-30.72c29.46-14.44 5.72-35.85-14.38-43.44-15.9-5.99-26.55-64.91 26.84-79.22 5.01-1.34 9.68-1.97 14-2.03 41.79-0.61 52 53.52 37.06 66.5-4.13 3.6-13.4 43.19 15.84 36.88l5.31-1.5c-0.930.32-1.820.6-2.690.84l118.19-31.66-30.34-113.31c-14.38-18.14-42.18-4.92-49.69 15-5.99 15.91-50.69 24.52-65-28.87-14.31-53.39 32.48-60.99 49.25-47 14.26 11.91 51.21 11.81 40.38-30.47l5.44 18.1-26.16-97.59-138.75 37.19c-19.11-8.48-25.91-31.45-10.4-44.44 27.63-23.13 14.2-81.37-33.16-81.84zm137.62 405.56l-3.84 1.09 6.28-1.69c-0.840.23-1.650.43-2.440.59zm63.44-243.56c0.78 2.29 1.44 4.48 1.97 6.56l-1.97-6.56z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiJigsawPiece;
