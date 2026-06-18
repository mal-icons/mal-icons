import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-solidity",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiSolidity {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.41 6.61L7.980.26l3.57 6.35H4.41zM8.41 0l3.57 6.35L15.55 0H8.41zm4.04 17.39l3.57 6.35 3.58-6.35h-7.15zm-0.61-10.28h-7.43l3.72 6.61 3.72-6.6zm0.43-0.25h7.43L15.980.26l-3.71 6.6zM15.59 24l-3.57-6.35L8.45 24h7.14zm-3.86-6.86H4.31l3.71 6.6 3.72-6.6zm0.43-0.25h7.43l-3.72-6.6-3.71 6.61z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiSolidity;
