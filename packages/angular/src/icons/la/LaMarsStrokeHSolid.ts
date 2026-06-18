import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-mars-stroke-h-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaMarsStrokeHSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 10 8 C 5.59 8 2 11.59 2 16 C 2 20.41 5.59 24 10 24 C 14.07 24 17.44 20.93 17.94 17 L 20 17 L 20 20 L 22 20 L 22 17 L 26.56 17 L 22.28 21.28 L 23.72 22.72 L 29.72 16.72 L 30.41 16 L 29.72 15.28 L 23.72 9.28 L 22.28 10.72 L 26.56 15 L 22 15 L 22 12 L 20 12 L 20 15 L 17.94 15 C 17.44 11.07 14.07 8 10 8 Z M 10 10 C 13.32 10 16 12.68 16 16 C 16 19.32 13.32 22 10 22 C 6.68 22 4 19.32 4 16 C 4 12.68 6.68 10 10 10 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaMarsStrokeHSolid;
