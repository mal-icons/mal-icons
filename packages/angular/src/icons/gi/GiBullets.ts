import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-bullets",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiBullets {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M162.32 17.94l-28.32 105.68 18.05 4.84 4.19-15.65 169.76 45.49 11.28-42.09-169.87-45.1 4.84-18.05 169.87 45.1 4.04-15.07L176.4 37.6l3.97-14.82-18.05-4.84zM361.34 98.7l-14.45 53.94c53.99 13.97 102.99 20.59 150.95 10.96-37.1-32.65-82.45-50.03-136.5-64.91zM128.68 145l-41.82 101.1 17.27 7.14 6.22-15.02L272.75 305.4l16.36-39.56-162.43-67.12 7.14-17.27 162.43 67.12 6.25-15.12-162.41-67.18 5.84-14.13-17.27-7.14zm186.82 105.95l-21.34 51.61c51.72 20.87 99.44 33.81 148.24 30.5-32.54-37.2-75.24-60.33-126.9-82.11zM77.11 266.07l-54.7 94.75 16.19 9.35 8.13-14.09 152.23 87.89 20.47-35.45L66.99 320.97l9.34-16.18 152.43 87.55 9.12-15.79L85.65 288.65l7.64-13.24-16.19-9.34zM248.46 395.59l-27.92 48.36c48.53 27.46 94.13 46.53 142.94 49.65-27.38-41.13-66.68-69.66-115.02-98.01z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiBullets;
