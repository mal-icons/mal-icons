import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-unfold-more-double",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssUnfoldMoreDouble {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480 0 312-169l42-42L481-85l127-127 42 42L480 0Zm0-200L312-369l42-42 127 126 127-127 42 42-170 170ZM354-548l-43-42 170-170 169 169-43 43-127-126-126 126Zm0-200-43-42 170-170 169 169-43 43-127-126-126 126Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssUnfoldMoreDouble;
