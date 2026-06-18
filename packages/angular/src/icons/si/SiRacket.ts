import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-racket",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiRacket {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0a11.95 11.95 0 0 0-4.10.72c4.87 2.56 11.32 10.89 13.55 18.69A11.96 11.96 0 0 0 24 12c0-6.63-5.37-12-12-12zM4.09 2.97A11.97 11.97 0 0 0 0 12c0 3.03 1.12 5.79 2.97 7.9 1.63-4.89 4.69-9.61 7.31-12.25-1.87-2.02-3.97-3.62-6.19-4.68zm2.28 19.63A11.95 11.95 0 0 0 12 24c2.09 0 4.06-0.54 5.77-1.48-0.99-4.56-2.85-8.74-5.28-12.15-2.6 2.8-5.19 7.7-6.12 12.22z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiRacket;
