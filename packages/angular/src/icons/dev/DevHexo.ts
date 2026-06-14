import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-hexo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevHexo {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M299.7 0 40 150.3v300L300.4 600 560 449.7V149.8z"}],["path",{"fill":"currentColor","d":"M177.9 430V170.3l23.6-13.8L224 170l0.2 53 0.3 53h150.9l0.2-53 0.2-53 23-13.2 23.2 13.6v259.3l-23 12.9-23.2-13-0.2-52.7-0.2-52.8H224.6l-0.3 52.7v53l-23 13.6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevHexo;
