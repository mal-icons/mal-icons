import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-stalagtite",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiStalagtite {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M79.19 18.92l76.45 168.37 16.05 168.14 20.11 32.22 23.72 68.82 37.92 38.57 29.07-17.9 18.52-92.8 16.75-76.78-48.14 14.57 15.52 20.63-54.84 71.32-12.01-19.24 23.42-81.88 14.14-4.73-0.4-1.33 72.74-22.02 42.89-62.2 23.2-85.36-24.98-3.94-33.04 51.25-15.71-10.13 34.26-53.14L333.27 18.92H189.42l37.94 89.09-60.13 59.62-67.52-148.71H79.19zm273.18 0l20.21 96.05 26.64 4.2 27.24-100.25h-74.09zm-74.48 31.55h0l36.5 81.1-18.65 46.01-38.34-56.23 20.49-70.87zm-61.47 94.71l33.05 44.7-42.97 14.64 62.13 63.26-5.39 18.26-26.06 8.72-59.16-69.62-3.65-38.27 42.06-41.7zm-35.3 112.48l42.63 50.17-18.78 65.66-15.11-24.21-8.75-91.62z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiStalagtite;
