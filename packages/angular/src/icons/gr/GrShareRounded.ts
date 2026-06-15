import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-share-rounded",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrShareRounded {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M20.92 3.62C20.88 3.5 20.8 3.39 20.71 3.3C20.71 3.29 20.71 3.29 20.71 3.29C20.52 3.11 20.28 3 20 3H20H14C13.45 3 13 3.45 13 4C13 4.55 13.45 5 14 5H17.59L10.29 12.29C9.9 12.68 9.9 13.32 10.29 13.71C10.68 14.1 11.32 14.1 11.71 13.71L19 6.41V10C19 10.55 19.45 11 20 11C20.55 11 21 10.55 21 10V4C21 4 21 4 21 4C21 3.87 20.97 3.74 20.92 3.62ZM3 8C3 5.24 5.24 3 8 3H9C9.55 3 10 3.45 10 4C10 4.55 9.55 5 9 5H8C6.34 5 5 6.34 5 8V16C5 17.66 6.34 19 8 19H16C17.66 19 19 17.66 19 16V15C19 14.45 19.45 14 20 14C20.55 14 21 14.45 21 15V16C21 18.76 18.76 21 16 21H8C5.24 21 3 18.76 3 16V8Z","fill":"currentColor"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrShareRounded;
