import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-imagesearch-roller",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrImagesearchRoller {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 3v4c0 0.55-0.45 1-1 1H7c-0.55 0-1-0.45-1-1V6H4v4h8c1.1 0 2 0.9 2 2v3h1c0.55 0 1 0.45 1 1v6c0 0.55-0.45 1-1 1h-4c-0.55 0-1-0.45-1-1v-6c0-0.550.45-1 1-1h1v-3H4c-1.1 0-2-0.9-2-2V6c0-1.10.9-2 2-2h2V3c0-0.550.45-1 1-1h12c0.55 0 1 0.45 1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrImagesearchRoller;
