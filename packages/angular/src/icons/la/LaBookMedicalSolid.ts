import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-book-medical-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaBookMedicalSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 9 4 C 7.36 4 6 5.36 6 7 L 6 25 C 6 26.64 7.36 28 9 28 L 26 28 L 26 4 Z M 9 6 L 24 6 L 24 22 L 9 22 C 8.65 22 8.32 22.07 8 22.19 L 8 7 C 8 6.43 8.43 6 9 6 Z M 15 10 L 15 13 L 12 13 L 12 15 L 15 15 L 15 18 L 17 18 L 17 15 L 20 15 L 20 13 L 17 13 L 17 10 Z M 9 24 L 24 24 L 24 26 L 9 26 C 8.43 26 8 25.57 8 25 C 8 24.43 8.43 24 9 24 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaBookMedicalSolid;
