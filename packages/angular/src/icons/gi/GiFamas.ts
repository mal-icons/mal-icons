import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-famas",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiFamas {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M466.67 16.34L435.78 47.23l14.33 14.33L481 30.66 466.67 16.34zM34.42 445.18l46.58 46.58a13.32 13.32 0 0 0 20.62-2.21l60.15-93.46 51.14-21.74s2.49-22.32 3.03-30.12c0.76-10.8 3.97-22.05 11.63-29.72l162.95-162.95a21.09 21.09 0 0 0 0-29.82l-42.56-42.56a17.52 17.52 0 0 0-24.77 0l-170.87 170.87a10.74 10.74 0 0 0 0 15.18l22.78 22.78L34.43 428.68a11.67 11.67 0 0 0-0.01 16.51zm153.61-182.74c-5.96-5.96-4.91-16.68 2.39-23.98l125.27-125.27c7.26-7.26 18.02-8.35 23.98-2.39l6.31 6.31L194.34 268.76l-6.31-6.31zm118.93 97.29l20.41-20.41 12.42-32.89-18.39-55.51 7.33-7.33 20.36 61.49a4.64 4.64 0 0 1-0.06 3.09l-13.31 35.41a4.64 4.64 0 0 1-1.06 1.65l-22.51 22.51c-0.280.28-23.95 18.89-23.95 18.89-22.11-10.37-32.47-38.34-26.12-56.56 2.83-8.120.04-12.98-4.64-15.19l20.8-20.8zm-78.22 30.47l39.35 39.35-28.23 44.62-61.82-61.82zM423.84 65.38l8.13 8.13-29.74 29.73-8.13-8.13 29.71-29.71z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiFamas;
