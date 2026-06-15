import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-folder-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlFolderAlt {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M960.16 208h-480l-96-96h-320c-35.34 0-64 28.66-64 64v160h-0.3v64H0.16v448c0 35.34 28.66 64 64 64h896c35.34 0 64-28.66 64-64V272c0-35.34-28.66-64-64-64zM64.15 176h290.75l78.62 77.25L453.63 272H960.16v64h-896V176h-0.02zm0 672V400h896v448h-896z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlFolderAlt;
