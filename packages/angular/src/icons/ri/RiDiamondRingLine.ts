import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-diamond-ring-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiDiamondRingLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.46 1L7.69 3.66L9.56 5.36C6.05 6.41 3.5 9.66 3.5 13.5C3.5 18.19 7.31 22 12 22C16.69 22 20.5 18.19 20.5 13.5C20.5 9.66 17.95 6.41 14.44 5.36L16.31 3.66L14.54 1H9.46ZM12 7C15.59 7 18.5 9.91 18.5 13.5C18.5 17.09 15.59 20 12 20C8.41 20 5.5 17.09 5.5 13.5C5.5 9.91 8.41 7 12 7ZM10.31 3.34L10.54 3H13.46L13.69 3.34L12 4.88L10.31 3.34Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiDiamondRingLine;
