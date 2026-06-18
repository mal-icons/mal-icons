import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-sith",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaSith {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 4 4 L 7.73 10.36 L 5 10 L 8.25 14.06 C 8.09 14.68 8 15.33 8 16 C 8 16.67 8.09 17.32 8.25 17.94 L 5 22 L 7.73 21.64 L 4 28 L 10.36 24.27 L 10 27 L 14.06 23.75 C 14.68 23.91 15.33 24 16 24 C 16.67 24 17.32 23.91 17.94 23.75 L 22 27 L 21.64 24.27 L 28 28 L 24.27 21.64 L 27 22 L 23.75 17.94 C 23.91 17.32 24 16.67 24 16 C 24 15.33 23.91 14.68 23.75 14.06 L 27 10 L 24.27 10.36 L 28 4 L 21.64 7.73 L 22 5 L 17.94 8.25 C 17.32 8.09 16.67 8 16 8 C 15.33 8 14.68 8.09 14.06 8.25 L 10 5 L 10.36 7.73 L 4 4 z M 16 10 C 19.31 10 22 12.69 22 16 C 22 19.31 19.31 22 16 22 C 12.69 22 10 19.31 10 16 C 10 12.69 12.69 10 16 10 z M 16 12 A 4 4 0 0 0 16 20 A 4 4 0 0 0 16 12 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaSith;
