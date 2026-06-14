import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-google-gemini-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevGoogleGeminiIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-google-gemini-icon-4-a)"}],["path",{"fill":"currentColor","d":"M535 268.2A385 385 0 0 1 313.3 10.4a13.7 13.7 0 0 0-26.6 0 385 385 0 0 1-100.3 176 387 387 0 0 1-176 100.3 13.7 13.7 0 0 0 0 26.6 387 387 0 0 1 176 100.3 385 385 0 0 1 100.3 176 13.7 13.7 0 0 0 26.6 0 386 386 0 0 1 100.3-176 385 385 0 0 1 176-100.3 13.7 13.7 0 0 0 0-26.6q-28-7-54.6-18.5"}],["path",{"fill":"currentColor","d":"M535 268.2A385 385 0 0 1 313.3 10.4a13.7 13.7 0 0 0-26.6 0 385 385 0 0 1-100.3 176 387 387 0 0 1-176 100.3 13.7 13.7 0 0 0 0 26.6 387 387 0 0 1 176 100.3 385 385 0 0 1 100.3 176 13.7 13.7 0 0 0 26.6 0 386 386 0 0 1 100.3-176 385 385 0 0 1 176-100.3 13.7 13.7 0 0 0 0-26.6q-28-7-54.6-18.5"}],["path",{"fill":"currentColor","d":"M535 268.2A385 385 0 0 1 313.3 10.4a13.7 13.7 0 0 0-26.6 0 385 385 0 0 1-100.3 176 387 387 0 0 1-176 100.3 13.7 13.7 0 0 0 0 26.6 387 387 0 0 1 176 100.3 385 385 0 0 1 100.3 176 13.7 13.7 0 0 0 26.6 0 386 386 0 0 1 100.3-176 385 385 0 0 1 176-100.3 13.7 13.7 0 0 0 0-26.6q-28-7-54.6-18.5"}],["path",{"fill":"currentColor","d":"M535 268.2A385 385 0 0 1 313.3 10.4a13.7 13.7 0 0 0-26.6 0 385 385 0 0 1-100.3 176 387 387 0 0 1-176 100.3 13.7 13.7 0 0 0 0 26.6 387 387 0 0 1 176 100.3 385 385 0 0 1 100.3 176 13.7 13.7 0 0 0 26.6 0 386 386 0 0 1 100.3-176 385 385 0 0 1 176-100.3 13.7 13.7 0 0 0 0-26.6q-28-7-54.6-18.5"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevGoogleGeminiIcon;
