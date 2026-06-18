import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-creative-commons-nd-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiCreativeCommonsNdLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 9H16V11H8V9ZM8 15V13H16V15H8ZM2 12C2 6.48 6.48 2 12 2 17.52 2 22 6.48 22 12 22 17.52 17.52 22 12 22 6.48 22 2 17.52 2 12ZM12 4C7.58 4 4 7.58 4 12 4 16.42 7.58 20 12 20 16.42 20 20 16.42 20 12 20 7.58 16.42 4 12 4Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiCreativeCommonsNdLine;
