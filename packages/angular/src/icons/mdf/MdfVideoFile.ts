import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-video-file",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfVideoFile {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 2H6.01a2 2 0 0 0-2 2L4 20c0 1.10.9 2 2 2h12c1.1 0 2-0.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zm1 5 2-1.06v4.12L14 16v1c0 0.55-0.45 1-1 1H9c-0.55 0-1-0.45-1-1v-4c0-0.550.45-1 1-1h4c0.55 0 1 0.45 1 1v1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfVideoFile;
