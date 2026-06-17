import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-archive-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsArchiveFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.64 15C13.98 15 15 13.85 15 12.5V5H1v7.5C1 13.85 2.02 15 3.36 15zM5.5 7h5a0.50.5 0 0 1 0 1h-5a0.50.5 0 0 1 0-1M0.8 1a0.80.8 0 0 0-0.80.8V3a0.80.8 0 0 0 0.80.8h14.4A0.80.8 0 0 0 16 3V1.8a0.80.8 0 0 0-0.8-0.8z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsArchiveFill;
