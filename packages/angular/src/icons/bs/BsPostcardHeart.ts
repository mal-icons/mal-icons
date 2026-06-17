import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-postcard-heart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsPostcardHeart {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 4.5a0.50.5 0 0 0-1 0v7a0.50.5 0 0 0 1 0zm3.50.88c1.48-1.42 4.8 1.39 0 4.62-4.79-3.23-1.48-6.04 0-4.62M2.5 5a0.50.5 0 0 0 0 1h3a0.50.5 0 0 0 0-1zm0 2a0.50.5 0 0 0 0 1h3a0.50.5 0 0 0 0-1zm0 2a0.50.5 0 0 0 0 1h3a0.50.5 0 0 0 0-1z"}],["path",{"fill-rule":"evenodd","d":"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsPostcardHeart;
