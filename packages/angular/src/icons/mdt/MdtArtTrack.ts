import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-art-track",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtArtTrack {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 7h8v2h-8zm0 4h8v2h-8zm0 4h8v2h-8zM4 17h6c1.1 0 2-0.9 2-2V9c0-1.1-0.9-2-2-2H4c-1.1 0-2 0.9-2 2v6c0 1.10.9 2 2 2zm1.25-4.25 1.25 1.51L8.25 12l2.25 3h-7l1.75-2.25z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtArtTrack;
