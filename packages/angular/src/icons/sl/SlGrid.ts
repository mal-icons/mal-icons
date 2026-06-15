import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-grid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlGrid {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M960 1024H640c-35.34 0-64-28.66-64-64V640c0-35.34 28.66-64 64-64h320c35.34 0 64 28.66 64 64v320c0 35.34-28.66 64-64 64zm0-384H640v320h320V640zm0-192H640c-35.34 0-64-28.66-64-64V64c0-35.34 28.66-64 64-64h320c35.34 0 64 28.66 64 64v320c0 35.34-28.66 64-64 64zm0-384H640v320h320V64zm-576 960H64c-35.34 0-64-28.66-64-64V640c0-35.34 28.66-64 64-64h320c35.34 0 64 28.66 64 64v320c0 35.34-28.66 64-64 64zm0-384H64v320h320V640zm0-192H64c-35.34 0-64-28.66-64-64V64C0 28.66 28.66 0 64 0h320c35.34 0 64 28.66 64 64v320c0 35.34-28.66 64-64 64zm0-384H64v320h320V64z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlGrid;
