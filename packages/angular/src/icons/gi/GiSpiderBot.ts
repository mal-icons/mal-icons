import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-spider-bot",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiSpiderBot {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M256 26.4c-7.87 0-14.99 3.64-20.34 8.78s-9.4 11.75-12.85 19.24c-6.91 14.98-11.39 33.74-14.6 52.39-6.42 37.3-7.4 74.22-7.4 74.22l-0.14 5.24 55.34 27.67 55.34-27.67-0.14-5.24s-0.98-36.92-7.4-74.22c-3.21-18.65-7.69-37.41-14.6-52.39-3.45-7.49-7.5-14.09-12.85-19.24-5.35-5.14-12.47-8.78-20.34-8.78zm0 18c2.68 0 4.920.92 7.86 3.76 2.95 2.83 6.13 7.62 8.99 13.81 5.71 12.38 10.14 30.08 13.21 47.9 5.39 31.3 6.57 58.97 6.84 66.19L256 195.86l-36.9-19.8c0.27-7.22 1.45-34.89 6.84-66.19 3.07-17.82 7.5-35.53 13.21-47.9 2.86-6.19 6.04-10.97 8.99-13.81 2.95-2.83 5.18-3.76 7.86-3.76zm-76.48 88.39l-10.54 37.64 10.91 5.45 4.3-1.43c0.55-9.28 1.37-19.92 2.57-31.28zm152.95 0l-7.23 10.38a698.64 698.64 0 0 1 2.57 31.28l4.3 1.43 10.91-5.45zM70.8 159L21.39 480.18l81.05-208.41-14.97-44.92 17.08-5.69 14.48 43.43 25.14 6.87 4.49-62.91zm370.4 0L363.35 208.54l4.52 63.28 25.1-7.17 14.5-43.5 17.08 5.69-14.98 44.92 81.05 208.41zM168.02 190.07L146.31 494h13.84l62.33-194.79-20.84-20.85 12.73-12.73 14.29 14.29 16.43-51.32zm175.96 0l-77.06 38.53 16.42 51.33 14.29-14.29 12.73 12.73-20.84 20.85L351.85 494h13.84zM256 253.53l-22.17 69.29L256 326.85l22.17-4.03zm-138.55 29.29l-6.84 17.6 31.08 5.65 1.17-16.31zm277.140.09l-25.41 7.26 1.14 15.9 31.08-5.65zm-267.94 38.72L95.71 432.15l42.81-81.65 1.88-26.36zm258.7 0l-13.75 2.5 1.88 26.36 42.81 81.65zm-140.66 21.46L256 427.9l11.31-84.8L256 345.15z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiSpiderBot;
