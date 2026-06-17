import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-layer-backward",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsLayerBackward {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.35 15.85a0.50.5 0 0 1-0.71 0l-3-3a0.50.5 0 0 1 0-0.71l1-1a0.50.5 0 0 1 0.71 0l0.650.65V4H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9v7.79l0.65-0.65a0.50.5 0 0 1 0.71 0l1 1a0.50.5 0 0 1 0 0.71z"}],["path",{"d":"M1 9a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4.5a0.50.5 0 0 1 0 1H1v2h4.5a0.50.5 0 0 1 0 1zm9.5 0a0.50.5 0 0 1 0-1H15V6h-4.5a0.50.5 0 0 1 0-1H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsLayerBackward;
