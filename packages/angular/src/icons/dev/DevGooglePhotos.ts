import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-google-photos",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevGooglePhotos {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-google-photos-1-a)"}],["path",{"fill":"currentColor","d":"M150 136.3a150 150 0 0 1 150 150V300H13.7C6.2 300 0 293.8 0 286.3a150 150 0 0 1 150-150"}],["path",{"fill":"currentColor","d":"M463.7 150a150 150 0 0 1-150 150H300V13.7C300 6.2 306.2 0 313.7 0a150 150 0 0 1 150 150"}],["path",{"fill":"currentColor","d":"M450 463.7a150 150 0 0 1-150-150V300h286.3c7.5 0 13.7 6.2 13.7 13.7a150 150 0 0 1-150 150"}],["path",{"fill":"currentColor","d":"M136.3 450a150 150 0 0 1 150-150H300v286.3c0 7.5-6.2 13.7-13.7 13.7a150 150 0 0 1-150-150"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevGooglePhotos;
