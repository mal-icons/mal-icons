import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-file-prescription-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaFilePrescriptionSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 6 3 L 6 29 L 26 29 L 26 9.6 L 25.7 9.3 L 19.7 3.3 L 19.4 3 L 6 3 z M 8 5 L 18 5 L 18 11 L 24 11 L 24 27 L 8 27 L 8 5 z M 20 6.4 L 22.6 9 L 20 9 L 20 6.4 z M 11 11 L 11 20 L 13 20 L 13 17 L 13.6 17 L 16.1 21.4 L 14 25 L 16 25 L 17 23.2 L 18 25 L 20 25 L 18 21.4 L 20 18 L 18 18 L 17 19.7 L 15.3 16.7 C 16.3 16.2 16.9 15.2 16.9 14 C 16.9 12.4 15.5 11 13.9 11 L 11 11 z M 13 13 L 14 13 C 14.6 13 15 13.4 15 14 C 15 14.6 14.6 15 14 15 L 13 15 L 13 13 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaFilePrescriptionSolid;
