import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-jeep",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiJeep {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M155.6 114.63l-14.31 7.15 3.58 7.16 13.42 26.84-57.58 57.58h22.63l42.49-42.49 21.25 42.49h17.89l-45.79-91.58-3.58-7.15zm132.42 2.73v24c0 11.31 5.53 24.45 12.13 39.47 6.35 14.43 13.97 29.76 19.87 42.33v54.2h-93.76l-16-48H80.03v80h2.62c5.45-11.53 14.99-20.26 26.18-26.09 12.89-6.72 28.06-9.91 43.2-9.91 15.14 0 30.31 3.18 43.2 9.91 11.18 5.84 20.73 14.56 26.17 26.09h117.34c10.22-23.39 31.87-35.9 54.56-37.97 23.3-2.12 47.98 5.74 65.74 21.97h7.22l10.67-32h-28.9v-48H333.09c-5.78-12.2-12.63-26.11-18.28-38.97-6.37-14.48-10.78-28.34-10.78-33.03v-24h-16zm-256.05 72v80h32v-80h-32zm432.05 23.88v32h16v-32h-16zm-231.57 32.12l5.33 16h50.23v-16H232.46zm-184.43 40v24.3h16v-24.3h-16zm104 16a48 48 0 0 0-48 48 48 48 0 0 0 48 48 48 48 0 0 0 48-48 48 48 0 0 0-48-48zm253.56 0a48 48 0 0 0-48 48 48 48 0 0 0 48 48 48 48 0 0 0 48-48 48 48 0 0 0-48-48zm-173.56 24v16h96v-16h-96zm-80 8a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm253.56 0a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiJeep;
