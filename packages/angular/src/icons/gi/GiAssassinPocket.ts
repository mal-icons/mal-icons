import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-assassin-pocket",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiAssassinPocket {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M233.56 16.23l-15.53 54.3-79.18-12.79-2.98 18.45L212.85 88.62l-14.92 52.16 17.97 5.14 11.03-38.55c92.56 14.84 177.4 26.69 273 16.82-78.98-39.33-166.49-51.6-258.83-66.37l10.43-36.47-17.97-5.14zm-68.69 120.44l-13.48 12.95 69.64 72.49-59.63 34.43 9.35 16.19 44.1-25.46c83.23 86.49 160.74 164.19 267.68 231.24-48.68-97.16-128.99-177.16-212.02-263.37l40.18-23.2-9.35-16.19-63.62 36.73-72.84-75.82zm-87.11 13.42l-17.82 5.65 20.94 66.09-53.99 13.61 4.57 18.13 38.82-9.79c25.36 79.63 50.28 151.82 99.1 222.02 2.31-80.82-23.15-155.34-48.49-234.78l37.79-9.53-4.57-18.12-55.08 13.89-21.28-67.16z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiAssassinPocket;
