import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-smiley-neutral-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcSmileyNeutral16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 0a8 8 0 0 1 8 8 8 8 0 1 1-8-8Zm0 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Zm2 8.75a0.750.75 0 0 1 0 1.5H6a0.750.75 0 0 1 0-1.5ZM5 6a1 1 0 1 1 0 2A1 1 0 0 1 5 6Zm6 0a1 1 0 1 1 0 2A1 1 0 0 1 11 6Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcSmileyNeutral16;
